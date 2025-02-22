package utfpr.edu.bcc3004.pews.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
public class Doctor {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotNull
  private String name;

  @NotNull
  private String registration;

  @Enumerated(EnumType.STRING)
  @NotNull
  private Role role;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getRegistration() {
    return registration;
  }

  public void setRegistration(String registration) {
    this.registration = registration;
  }

  public Role getRole() {
    return role;
  }

  public void setRole(Role role) {
    this.role = role;
  }

  public enum Role {
    PEDIATRICIAN, NURSE, NURSING_TECHNICIAN, NURSING_ASSISTANT
  }
}
