package utfpr.edu.bcc3004.pews.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import utfpr.edu.bcc3004.pews.model.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
  Patient findByCpf(String cpf);
}
