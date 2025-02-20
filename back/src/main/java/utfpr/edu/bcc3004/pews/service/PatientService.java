package utfpr.edu.bcc3004.pews.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import utfpr.edu.bcc3004.pews.repository.PatientRepository;
import utfpr.edu.bcc3004.pews.model.Patient;

@Service
public class PatientService {

  @Autowired
  private PatientRepository patientRepository;

  public Patient save(Patient patient) {
    return patientRepository.save(patient);
  }

  public List<Patient> findAll() {
    return patientRepository.findAll();
  }

  public Optional<Patient> findById(Long id) {
    return patientRepository.findById(id);
  }

  public Patient findByCpf(String cpf) {
    return patientRepository.findByCpf(cpf);
  }

}
