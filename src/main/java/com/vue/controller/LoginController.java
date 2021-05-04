package com.vue.controller;

import java.util.Map;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

	@CrossOrigin(origins ="http://localhost:8081")
	@RequestMapping("signup")
	public String signup(@RequestBody Map<String,Object> req, Model model) {
		System.out.println((String)req.get("username") + " =========================== ");
		return "LOGIN OK";
	}
}
