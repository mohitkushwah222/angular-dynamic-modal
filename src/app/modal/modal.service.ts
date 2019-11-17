import { Injectable, ComponentFactoryResolver, ViewContainerRef, Injector, ComponentRef, ComponentFactory, ReflectiveInjector } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private vcRef: ViewContainerRef;
  private injector: Injector;
  public activeInstances = 0;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  registerViewcontainerRef(vcRef: ViewContainerRef): void {
    this.vcRef = vcRef;
  }

  registerInjector(injector: Injector): void {
    this.injector = injector;
  }

  createFromFactory<T>(componentFactory: ComponentFactory<T>, paremeter?: Object): Observable<ComponentRef<T>> {
    const componentRef$ = new ReplaySubject();
    const childInjector = ReflectiveInjector.resolveAndCreate([], this.injector);
    const componentRef = this.vcRef.createComponent(componentFactory, 0, childInjector);
    Object.assign(componentRef.instance, paremeter);
    this.activeInstances++;
    componentRef.instance['destroy'] = () => {
      this.activeInstances--;
      componentRef.destroy();
    };
    componentRef$.next(componentRef);
    componentRef$.complete();
    return <Observable<ComponentRef<T>>>componentRef$.asObservable();
  }
}
