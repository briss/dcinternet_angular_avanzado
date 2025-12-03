import { Component, inject } from '@angular/core';
import { ApiResourceService } from '../../services/api-resource-service';

@Component({
  selector: 'app-api-resource',
  imports: [],
  templateUrl: './api-resource.html',
  styleUrl: './api-resource.css',
})
export class ApiResource {

  service:ApiResourceService = inject(ApiResourceService);

  cursosResource = this.service.cursosResource;

  cursosRxResource = this.service.cursosRxResource;
}
