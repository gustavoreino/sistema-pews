package utfpr.edu.bcc3004.pews.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;
import java.util.Optional;

import utfpr.edu.bcc3004.pews.model.Patient;
import utfpr.edu.bcc3004.pews.service.PatientService;

@RestController
@RequestMapping("/api/pacientes")
public class PatientController {

  @Autowired
  private PatientService patientService;

  @GetMapping
  public List<Patient> findAll() {
    return patientService.findAll();
  }

  @GetMapping("/{id}")
  public ResponseEntity<Patient> findById(@PathVariable Long id) {
    Optional<Patient> patient = patientService.findById(id);
    return patient.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
  }

  @GetMapping("/cpf/{cpf}")
  public ResponseEntity<Patient> findByCpf(@PathVariable String cpf) {
    Patient patient = patientService.findByCpf(cpf);
    return patient != null ? ResponseEntity.ok(patient) : ResponseEntity.notFound().build();
  }

  @PostMapping
  public ResponseEntity<?> save(@RequestBody @Valid Patient patient, BindingResult result) {
    if (result.hasErrors()) {
      return ResponseEntity.badRequest().body(result.getAllErrors());
    }

    Patient res = patientService.save(patient);
    return ResponseEntity.status(HttpStatus.CREATED).body(res);
  }

  @PatchMapping("/{id}")
  public ResponseEntity<?> update(@PathVariable Long id, @RequestBody @Valid Patient patient, BindingResult result) {
    if (result.hasErrors()) {
      return ResponseEntity.badRequest().body(result.getAllErrors());
    }

    Patient updatedPatient = patientService.update(id, patient);

    if (updatedPatient == null) {
      return ResponseEntity.notFound().build();
    }

    return ResponseEntity.status(HttpStatus.OK).body(updatedPatient);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Long id) {
    patientService.delete(id);
    return ResponseEntity.noContent().build();
  }
}