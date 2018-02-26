import { Component } from '@angular/core';
import { OrderService } from "../../services/order/order.service";

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {

    orders$;

    constructor (private orderService: OrderService) {
        this.orders$ = orderService.getOrders();
    }
}
