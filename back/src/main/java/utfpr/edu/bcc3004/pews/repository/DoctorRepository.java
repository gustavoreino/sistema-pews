package utfpr.edu.bcc3004.pews.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import utfpr.edu.bcc3004.pews.model.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {
}