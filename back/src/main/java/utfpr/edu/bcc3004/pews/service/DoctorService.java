package utfpr.edu.bcc3004.pews.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import utfpr.edu.bcc3004.pews.model.Doctor;
import utfpr.edu.bcc3004.pews.repository.DoctorRepository;

@Service
public class DoctorService {

  @Autowired
  private DoctorRepository doctorRepository;

  public List<Doctor> findAll() {
    return doctorRepository.findAll();
  }

  public Optional<Doctor> findById(Long id) {
    return doctorRepository.findById(id);
  }

  public Doctor save(Doctor doctor) {
    return doctorRepository.save(doctor);
  }

  public Doctor update(Long id, Doctor doctorUpdatedData) {
    Optional<Doctor> entry = doctorRepository.findById(id);

    if (entry.isEmpty()) {
      return null;
    }

    Doctor doctor = entry.get();

    if (doctorUpdatedData.getName() != null) {
      doctor.setName(doctorUpdatedData.getName());
    }
    if (doctorUpdatedData.getRegistration() != null) {
      doctor.setRegistration(doctorUpdatedData.getRegistration());
    }
    if (doctorUpdatedData.getRole() != null) {
      doctor.setRole(doctorUpdatedData.getRole());
    }

    return doctorRepository.save(doctor);
  }

  public void delete(Long id) {
    doctorRepository.deleteById(id);
  }
}
