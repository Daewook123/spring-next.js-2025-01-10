package com.ll.next_js_2025_01_10.domain.post.comment.dto;

import com.ll.next_js_2025_01_10.domain.post.comment.entity.PostComment;
import lombok.Getter;
import org.springframework.lang.NonNull;

import java.time.LocalDateTime;

@Getter
public class PostCommentDto {
    @NonNull
    private long id;
    @NonNull
    private LocalDateTime createDate;
    @NonNull
    private LocalDateTime modifyDate;
    @NonNull
    private long postId;
    @NonNull
    private long authorId;
    @NonNull
    private String authorName;
    @NonNull
    private String content;

    public PostCommentDto(PostComment postComment) {
        this.id = postComment.getId();
        this.createDate = postComment.getCreateDate();
        this.modifyDate = postComment.getModifyDate();
        this.postId = postComment.getPost().getId();
        this.authorId = postComment.getAuthor().getId();
        this.authorName = postComment.getAuthor().getName();
        this.content = postComment.getContent();
    }
}

