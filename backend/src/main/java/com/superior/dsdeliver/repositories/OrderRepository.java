package com.superior.dsdeliver.repositories;

import com.superior.dsdeliver.entities.Order;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    
}
