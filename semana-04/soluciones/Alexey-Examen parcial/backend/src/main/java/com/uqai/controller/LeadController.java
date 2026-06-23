package com.uqai.controller;

import com.uqai.dto.request.LeadRequest;
import com.uqai.dto.response.LeadResponse;
import com.uqai.entity.Lead;
import com.uqai.service.LeadService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leads")
@RequiredArgsConstructor
public class LeadController {

    private final LeadService leadService;

    @PostMapping
    public LeadResponse guardarLead(@Valid @RequestBody LeadRequest request) {
        return leadService.guardarLead(request);
    }

    @GetMapping
    public List<LeadResponse> listarLeads() {
        return leadService.listarLeads();
    }
}