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

  public void delete(Long id) {
    patientRepository.deleteById(id);
  }

  public Patient update(Long id, Patient patientUpdatedData) {
    Optional<Patient> entry = patientRepository.findById(id);

    if (entry.isEmpty()) {
      return null;
    }

    Patient patient = entry.get();

    if (patientUpdatedData.getName() != null) {
      patient.setName(patientUpdatedData.getName());
    }
    if (patientUpdatedData.getBirthdate() != null) {
      patient.setBirthdate(patientUpdatedData.getBirthdate());
    }
    if (patientUpdatedData.getCpf() != null) {
      patient.setCpf(patientUpdatedData.getCpf());
    }
    if (patientUpdatedData.getPhone() != null) {
      patient.setPhone(patientUpdatedData.getPhone());
    }
    if (patientUpdatedData.getDiagnosis() != null) {
      patient.setDiagnosis(patientUpdatedData.getPhone());
    }

    return patientRepository.save(patient);
  }
}
