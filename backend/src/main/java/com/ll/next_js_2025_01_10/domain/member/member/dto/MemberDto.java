package com.ll.next_js_2025_01_10.domain.member.member.dto;

import com.ll.next_js_2025_01_10.domain.member.member.entity.Member;
import lombok.Getter;
import org.springframework.lang.NonNull;

import java.time.LocalDateTime;


@Getter
public class MemberDto {
    @NonNull
    private long id;
    @NonNull
    private LocalDateTime createDate;
    @NonNull
    private LocalDateTime modifyDate;
    @NonNull
    private String nickname;

    public MemberDto(Member member) {
        this.id = member.getId();
        this.createDate = member.getCreateDate();
        this.modifyDate = member.getModifyDate();
        this.nickname = member.getNickname();
    }
}

