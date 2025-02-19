package utfpr.edu.bcc3004.pews.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import utfpr.edu.bcc3004.pews.model.Patient;
import utfpr.edu.bcc3004.pews.service.PatientService;

@RestController
@RequestMapping("/api/pacientes")
public class PatientController {

  @Autowired
  private PatientService patientService;

  @PostMapping
  public ResponseEntity<?> save(@RequestBody @Valid Patient patient, BindingResult result) {
    if (result.hasErrors()) {
      return ResponseEntity.badRequest().body(result.getAllErrors());
    }

    Patient res = patientService.save(patient);
    return ResponseEntity.status(HttpStatus.CREATED).body(res);
  }
}