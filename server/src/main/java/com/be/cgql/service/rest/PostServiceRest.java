package com.be.cgql.service.rest;


import com.be.cgql.dto.PostDto;
import com.be.cgql.dto.converter.PostDtoConverter;
import com.be.cgql.entity.PostEntity;
import com.be.cgql.exception.NotFoundException;
import com.be.cgql.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class PostServiceRest {

    private final PostRepository postRepository;

    @Transactional
    public PostDto createPost(PostDto dto) {
        PostEntity postEntity = PostDtoConverter.convertDtoToEntity(dto);

        postEntity = postRepository.save(postEntity);

        return  PostDtoConverter.convertEntityToDto(postEntity);
    }


    @Transactional(readOnly = true)
    public PostDto getPostDtoById(String uuid) {
        PostEntity postEntity = getPostEntityById(uuid);

        return PostDtoConverter.convertEntityToDto(postEntity);
    }

    @Transactional(readOnly = true)
    public PostEntity getPostEntityById(String uuid) {
        return  postRepository.findById(uuid)
                .orElseThrow(() -> new NotFoundException("Post with id " + uuid + " not found"));
    }
}

