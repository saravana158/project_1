package com.pravin.upkart.controller;

import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.pravin.upkart.entity.Product;
import com.pravin.upkart.service.ProductService;

@CrossOrigin
@Controller
public class ProductController {
    private final ProductService productService;
    private static final Logger logger = Logger.getLogger(ProductController.class.getName());

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/products")
    public ResponseEntity<String> addProduct(
            @RequestParam("file") MultipartFile file,
            @RequestParam("name") String name,
            @RequestParam("price") String price,
            @RequestParam("stock") int stock,
            @RequestParam("category") String category
    ) {
        try {
            Product product = new Product();
            product.setName(name);
            product.setPrice(price);
            product.setStock(stock);
            product.setCategory(category);

            String response = productService.addProduct(product, file);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (IOException e) {
            logger.log(Level.SEVERE, "Error occurred during product addition", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred during product addition");
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Unexpected error occurred during product addition", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Unexpected error occurred during product addition");
        }
    }
    @GetMapping("/men")
    public ResponseEntity<List<Product>> getMenProducts() {
        try {
            List<Product> menProducts = productService.getProductsByCategory("Men");
            return ResponseEntity.status(HttpStatus.OK).body(menProducts);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
