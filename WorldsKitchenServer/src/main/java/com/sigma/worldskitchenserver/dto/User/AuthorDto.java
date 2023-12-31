package com.sigma.worldskitchenserver.dto.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class AuthorDto {

    private Long id;

    private String firstName;

    private String lastName;

    private String imageUrl;
}
