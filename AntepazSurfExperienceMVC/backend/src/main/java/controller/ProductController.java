package com.antepazsurf.backend.controller;

import com.antepazsurf.backend.model.Product;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @GetMapping
    public List<Product> getProducts() {
        return List.of(
                new Product("Clase Principiante Individual", 45.0, "2 horas"),
                new Product("Clase Grupal Amigos (4 Pax)", 100.0, "2 horas")
        );
    }
}
