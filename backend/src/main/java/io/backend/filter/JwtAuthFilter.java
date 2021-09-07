package io.backend.filter;

import io.backend.model.UserEntity;
import io.backend.service.JwtService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtService jwtService;

    @Autowired
    public JwtAuthFilter(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            String authHeader = request.getHeader("Authorization");
            if (authHeader != null) {
                String token = authHeader.replace("Bearer", "").trim();

                Claims claims = jwtService.getClaims(token);
                String userNameClaim = claims.getSubject();
                String userRoleClaim = claims.get("role", String.class);

                SecurityContextHolder.getContext().setAuthentication(
                        new UsernamePasswordAuthenticationToken(
                                UserEntity.builder()
                                        .userName(userNameClaim)
                                        .userRole(userRoleClaim)
                                        .build(),"",
                                List.of(new SimpleGrantedAuthority(userRoleClaim))
                        )
                );
            }
        } catch (JwtException JwtEx) {
            // what's wrong in here?
        }
        filterChain.doFilter(request, response);
    }
}
