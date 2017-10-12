import { Edge } from './../../_models/edge.model';
import { InputNode } from './../../_models/inputNode.model';
import { OutputNode } from './../../_models/outputNode.model';
import { Node } from './../../_models/node.model';
import { ComponentNode } from './../../_models/componentNode.model';
import { ComponentModel } from './../../_models/component.model';
import { ProjectsService } from './../../_services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from './../../_models/project.model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Response } from '@angular/http';
import { SessionService } from '../../_services/session.service';
import { ComponentsService } from '../../_services/components.service';
import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Drag from 'd3-drag';
import * as d3Zoom from 'd3-zoom';
import { UUID } from 'angular2-uuid';
import { ContextMenuService, ContextMenuComponent } from 'ngx-contextmenu';

let saveProject = null;
let self = null;
declare var $;

@Component({
  selector: 'app-designspace-page',
  templateUrl: './designspace-page.component.html',
  styleUrls: ['./designspace-page.component.scss']
})
export class DesignspacePageComponent implements OnInit {
  @ViewChild('deleteMenu') public deleteMenu: ContextMenuComponent;
  @ViewChild('inputMenu') public inputMenu: ContextMenuComponent;
  @ViewChild('deleteEdgeMenu') public deleteEdgeMenu: ContextMenuComponent;
  @ViewChild('componentMenu') public componentMenu: ContextMenuComponent;

  private svg: any;
  private width = 900;
  private height = 500;
  public components: ComponentModel[] = [];
  public currentInputNode: any = null;
  public project: Project;
  private nodes: Node[] = [];

  constructor(private componentsService: ComponentsService,
              private sessionService: SessionService,
              private vcr: ViewContainerRef,
              public toastr: ToastsManager,
              public route: ActivatedRoute,
              private projectsService: ProjectsService,
              private contextMenuService: ContextMenuService,
              private router: Router
  ) {
    this.toastr.setRootViewContainerRef(vcr);
    saveProject = this.saveProject.bind(this);
    self = this;
  }

  ngOnInit() {
    // Get initial SVG
    this.svg = d3.select('#mainsvg');

    // Set zoom action
    d3.select('svg').call(d3Zoom.zoom().on('zoom', () => {
      self.contextMenuService.destroyLeafMenu();
      self.svg.attr('transform', d3.event.transform);
    }));

    // Load components
    this.loadComponents();

    // Get ID of project and load it
    this.route.params.subscribe(params => {
      this.loadProject(params['id']);
    });
  }

  /**
   * Loads the project from the API
   */
  private loadProject(id: String) {
    this.nodes.forEach(n => this.deleteNode(n));
    if (id === 'new') {
      this.project = new Project('Untitled Project', '');
      this.projectsService.createProject(this.project)
        .then(project => {
          this.project = project;
          this.router.navigateByUrl('/projects/' + project.id);
        });
    } else {
      this.projectsService.getProject(id)
        .then(project => {
          this.project = project;
          if (project.data) {
            const nodes = JSON.parse(project.data);
            nodes.forEach(node => {
              if (node.type === 'Input') {
                this.addInput(node.coords, node.id);
              } else if (node.type === 'Output') {
                this.addOutput(node.coords, node.id);
              } else {
                this.addNode(node.component, node.coords, node.id);
              }
            });
            nodes.forEach(node => {
              node.parents.forEach(edge => {
                this.addEdge(this.getNode(edge).outCircle._groups[0][0], this.getNode(node.id).inCircle._groups[0][0]);
              });
            });
          }
        });
    }
  }

  /**
   * Gets a node with a specific ID
   */
  getNode(id): Node {
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].id === id) {
        return this.nodes[i];
      }
    }
  }

  /**
   * Adds a node
   */
  addNode(component: ComponentModel, coords?: { x: number, y: number}, id?: string) {
    coords = (coords || { x: this.width / 2 - 100, y: this.height / 2 - 40});

    const node = new ComponentNode(self.svg.append('g'), component, coords, id);

    // Save node
    this.nodes.push(node);

    // Set up drag functions
    node.outCircle
      .call(d3Drag.drag()
      .on('start', this.startEdgeDrag)
      .on('drag', this.dragEdge)
      .on('end', this.endEdgeDrag));
    node.inCircle
      .call(d3Drag.drag()
      .on('start', this.startEdgeDrag)
      .on('drag', this.dragEdge)
      .on('end', this.endEdgeDrag));
    node.mainRect.call(d3Drag.drag()
      .on('drag', this.drag)
      .on('end', this.endDrag));
    node.headerRect.call(d3Drag.drag()
      .on('drag', this.drag)
      .on('end', this.endDrag));

    // Set up context menu function
    if (node.component.author.username !== 'Math') {
      node.group.on('contextmenu', () => {
        d3.event.preventDefault();
        this.contextMenuService.show.next({
          contextMenu: this.componentMenu,
          event: d3.event,
          item: node,
        });
        return false;
      });
    } else {
      node.group.on('contextmenu', () => {
        d3.event.preventDefault();
        this.contextMenuService.show.next({
          contextMenu: this.deleteMenu,
          event: d3.event,
          item: node,
        });
        return false;
      });
    }    
  }

  /**
   * Function called when dragging a node
   */
  drag() {
    // Close any context menus that may be open
    self.contextMenuService.destroyLeafMenu();
    d3.select(this).datum().node.updatePosition(d3.event.x, d3.event.y);
  }

  /**
   * Function called a node is finished being dragged
   */
  endDrag(d) {
    d3.select(this).datum().node.updatePosition(d3.event.x, d3.event.y);
    saveProject();
  }

  /**
   * Function called when starting to drag from an input/output circle
   */
  startEdgeDrag() {
    const x = d3.select(d3.event.sourceEvent.target).attr('cx');
    const y = d3.select(d3.event.sourceEvent.target).attr('cy');
    d3.select('#edgepath').attr('x1', x).attr('y1', y);
  }

  /**
   * Deletes a node
   */
  deleteNode(node: Node) {
    node.remove();
    this.nodes = this.nodes.filter(n => n.id !== node.id);
    saveProject();
  }

  /**
   * Called when an edge is dragged
   */
  dragEdge() {
    // Close all context menus
    self.contextMenuService.destroyLeafMenu();
    const edge = d3.select('#edgepath');
    const x = d3.mouse(self.svg.node())[0];
    const y = d3.mouse(self.svg.node())[1];
    edge.attr('x2', x).attr('y2', y);
    edge.style('display', 'block');
  }

  /**
   * Add an edge
   */
  addEdge(sourceCircle, targetCircle, id?: string) {
    try {
      const edge = new Edge(self.svg.append('line'), sourceCircle, targetCircle);

      // Set up context menu
      edge.line.on('contextmenu', () => {
        d3.event.preventDefault();
        self.contextMenuService.show.next({
          contextMenu: self.deleteEdgeMenu,
          event: d3.event,
          item: edge,
        });

        return false;
      });
    } catch (error) {
      if (error.message === 'Too many inputs') {
        this.toastr.error('That node can take no more inputs', null, {showCloseButton: true});
      } else {
        console.log(error);
      }
    }
  }

  /**
   * Called when finished dragging the edge
   */
  endEdgeDrag() {
    d3.select('#edgepath').style('display', 'none');
    const source: any = this;
    const target = d3.event.sourceEvent.target;
    if (target.tagName === 'circle' && source !== target && d3.select(target).datum() && d3.select(target).datum().type) {
      self.addEdge(source, target);
      saveProject();
    }
  }

  /**
   * Adds an output node to the design
   */
  private addOutput(coords?: { x: number, y: number}, id?: string) {
    coords = coords || { x: this.width / 2 - 100, y: this.height / 2 - 40};
    const node = new OutputNode(this.svg.append('g'), coords, id);

    // Set up drag handlers
    node.inCircle
      .call(d3Drag.drag()
      .on('start', this.startEdgeDrag)
      .on('drag', this.dragEdge)
      .on('end', this.endEdgeDrag));
    node.group.call(d3Drag.drag()
      .on('drag', this.drag)
      .on('end', this.endDrag));
      this.nodes.push(node);

    // Set up contextmenu
    node.group.on('contextmenu', () => {
      d3.event.preventDefault();
      this.contextMenuService.show.next({
        contextMenu: this.deleteMenu,
        event: d3.event,
        item: node,
      });
      return false;
    });
  }

  /**
   * Adds an output node to the design
   */
  private addInput(coords?: { x: number, y: number}, id?: string) {
    coords = coords || { x: this.width / 2 - 100, y: this.height / 2 - 40};
    const node = new InputNode(this.svg.append('g'), coords, id);

    // Set up drag handlers
    node.outCircle
      .call(d3Drag.drag()
      .on('start', this.startEdgeDrag)
      .on('drag', this.dragEdge)
      .on('end', this.endEdgeDrag));
    node.group.call(d3Drag.drag()
      .on('drag', this.drag)
      .on('end', this.endDrag));
      this.nodes.push(node);

    // Set up contextmenu
    node.group.on('contextmenu', () => {
      d3.event.preventDefault();
      this.contextMenuService.show.next({
        contextMenu: this.deleteMenu,
        event: d3.event,
        item: node,
      });
      return false;
    });
  }

  /**
   * Sends design to the API to be designed
   */
  private executeSession() {
    this.project.data = this.nodesToJSON();
    this.projectsService.execute(this.project)
    .then((res: any) => {
      if (res.json() && res.json().values) {
        console.log(res.json);
        this.toastr.success(res.json().values, 'Recieved Result', {showCloseButton: true});
      }
    })
    .catch((res: Response) => {
      if (res.json) {
        console.log(res.json());
        if (res.json().errors) {
          this.toastr.error(res.json().errors[0].detail, null, {showCloseButton: true});
        }
      }
    });
  }

  /**
   * Loads components from the API
   */
  private loadComponents() {
    this.componentsService.getComponents()
    .then((components: ComponentModel[]) => {
      this.components = components;
    });
  }

  /**
   * Sends design to the API to be saved
   */
  public saveProject() {
    if (this.project !== undefined && this.project !== null) {
      this.project.data = this.nodesToJSON();
      this.projectsService.saveProject(this.project)
      .catch(err => console.log(err));
    }
  }

  /**
   * Converts all nodes to a JSON representation
   */
  private nodesToJSON() {
    return JSON.stringify(this.nodes.map((n: Node) => n.toJSON()));
  }


  /**
   * Called when the set value button is pressed on a node. Shows the modal
   */
  setValues(node) {
    this.currentInputNode = node;
    $('#valueModal').modal('show');
  }

  /**
   * Exports the project as a component
   */
  exportProject() {
    this.project.data = this.nodesToJSON();
    this.projectsService.export(this.project)
      .then(() => {
        this.toastr.success('Project exported', 'Sucess!', {showCloseButton: true});
      })
      .catch(err => {
        if (err.json() && err.json().errors) {
          this.toastr.error(err.json().errors[0].detail, 'Error', {showCloseButton: true});
        } else {
          this.toastr.error('Something went wrong :(', 'Error', {showCloseButton: true});
        }
      });
  }

  componentDetails(node: ComponentNode) {
    this.router.navigateByUrl('/packages/' + node.component.id);
  }
}
