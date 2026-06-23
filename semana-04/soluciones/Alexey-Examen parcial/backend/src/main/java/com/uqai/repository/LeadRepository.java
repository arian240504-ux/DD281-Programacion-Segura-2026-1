package com.uqai.repository;

import com.uqai.entity.Lead;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeadRepository
        extends JpaRepository<Lead, Long> {
}