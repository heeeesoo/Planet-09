package com.cos.book.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.book.domain.Book;
import com.cos.book.domain.Buy;
import com.cos.book.service.BookService;
import com.cos.book.service.BuyService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class BuyController {
	
	private final BuyService buyService;
	
	@CrossOrigin //외부에서 오는 js요청을 허용해준다.
	@GetMapping({ "", "/buyhome" })
	public String hello() {
		return "<h1>HelloBuy</h1>";
	} 

	@CrossOrigin
	@PostMapping("/buyhome/buy")
	public ResponseEntity<?> save(@RequestBody Buy buy) {
		return new ResponseEntity<>(buyService.저장하기(buy), HttpStatus.CREATED); // 200
	}
	
	@CrossOrigin
	@GetMapping("/buyhome/buy")
	public ResponseEntity<?> findAll() {
		return new ResponseEntity<>(buyService.모두가져오기(), HttpStatus.OK); // 200
	}
	
	@CrossOrigin
	@GetMapping("/buyhome/buy/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id) {
		return new ResponseEntity<>(buyService.한건가져오기(id), HttpStatus.OK); // 200
	}
	
	@CrossOrigin
	@PutMapping("/buyhome/buy/{id}")
	public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Buy buy) {
		return new ResponseEntity<>(buyService.수정하기(id, buy), HttpStatus.OK); // 200
	}
	
	@CrossOrigin
	@DeleteMapping("/buyhome/buy/{id}")
	public ResponseEntity<?> deleteById(@PathVariable Long id) {
		return new ResponseEntity<>(buyService.삭제하기(id), HttpStatus.OK); // 200
	}
}
