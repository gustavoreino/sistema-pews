package utfpr.edu.bcc3004.pews.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

import utfpr.edu.bcc3004.pews.model.Doctor;
import utfpr.edu.bcc3004.pews.service.DoctorService;

@RestController
@RequestMapping("/api/avaliadores")
public class DoctorController {

  private final DoctorService doctorService;

  @Autowired
  public DoctorController(DoctorService doctorService) {
    this.doctorService = doctorService;
  }

  @GetMapping
  public List<Doctor> findAll() {
    return doctorService.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Doctor> findById(@PathVariable Long id) {
    Optional<Doctor> doctor = doctorService.findById(id);
    return doctor.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<?> save(@RequestBody @Valid Doctor doctor, BindingResult result) {
    if (result.hasErrors()) {
      return ResponseEntity.badRequest().body(result.getAllErrors());
    }

    Doctor res = doctorService.save(doctor);
    return ResponseEntity.status(HttpStatus.CREATED).body(res);
  }

  @PatchMapping("/{id}")
  public ResponseEntity<?> update(@PathVariable Long id, @RequestBody @Valid Doctor doctor, BindingResult result) {
    if (result.hasErrors()) {
      return ResponseEntity.badRequest().body(result.getAllErrors());
    }

    Doctor updatedDoctor = doctorService.update(id, doctor);

    if (updatedDoctor == null) {
      return ResponseEntity.notFound().build();
    }

    return ResponseEntity.status(HttpStatus.OK).body(updatedDoctor);
  }
}
