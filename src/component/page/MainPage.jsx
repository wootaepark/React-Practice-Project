import React from "react";  
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import Button from "../ui/Button";
import PostList from "../list/PostList";
import data from "../../data.json";

const Wrapper = styled.div`
    padding : 16px;
    width : calc(100% - 32px);
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

const Container = styled.div`
    width : 100%;
    max-width : 720px;

    & > *{
        :not(:last-child){
            margin-bottom : 16px;
        }
    }
`;
/*

& : 부모 선택자
> * : 모든 자식 요소
:not(:last-child) : 마지막 자식이 아닌 요소를 선택

즉 마지막 자식이 아닌 요소들에게 margin-bottom : 16px 을 부여

*/

function MainPage(props){

    const {} = props;

    const navigate = useNavigate();

    return(
        <Wrapper>
            <Container>
                <Button
                title="글 작성하기"
                onClick={()=>{
                    navigate("/post-write");
                }}></Button>

                <PostList
                posts={data}
                onClickItem={(item) =>{
                    navigate(`/post/${item.id}`);
                }}></PostList>
            </Container>
        </Wrapper>
    )

}

export default MainPage;