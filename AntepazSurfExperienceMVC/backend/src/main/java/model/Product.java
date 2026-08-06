package com.antepazsurf.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private Double price;
    private String duration;

    public Product() {}

    public Product(String title, Double price, String duration) {
        this.title = title;
        this.price = price;
        this.duration = duration;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }
}