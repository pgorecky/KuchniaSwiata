package com.sigma.worldskitchenserver.mapper;

import com.sigma.worldskitchenserver.dto.Dish.CommentDto;
import com.sigma.worldskitchenserver.model.Comment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")

public interface CommentMapper {

    CommentDto toCommentDto(Comment comment);
}
