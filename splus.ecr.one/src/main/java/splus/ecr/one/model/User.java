package splus.ecr.one.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
//@Data
@Table(name="USER")
public class User {

	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
	
	@Column(name="NAME")
	private String name;
	
	@Column(name="LOGIN_ID")
	private String loginId;
	
	@Column(name="PASSWORD")
	private String password;
	
	@Column(name="ROLE")
	private String role;
	
	
	@ManyToOne
	@JoinColumn(name = "COMPANY_ID")
	private Company company;


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


	public String getLoginId() {
		return loginId;
	}


	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getRole() {
		return role;
	}


	public void setRole(String role) {
		this.role = role;
	}


	public Company getCompany() {
		return company;
	}


	public void setCompany(Company company) {
		this.company = company;
	}


	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", loginId=" + loginId + ", password=" + password + ", role="
				+ role + ", company=" + company + "]";
	}
	
	
}
