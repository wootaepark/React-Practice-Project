import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import PostList from "../list/PostList";
import data from "../../data.json";
import TextInput from "../ui/TextInput";

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

function MainPage(props) {

    const { } = props;

    const navigate = useNavigate();
    const [query, setQuery] = useState(""); // 검색 텍스트 필드 전용 state
    const [searchTerm, setSearchTerm] = useState(""); // 적용할 검색어
    const [result, setResult] = useState(data); // 검색 결과 저장


    
    useEffect(()=>{
        if (searchTerm) {
            const filteredData = data.filter((post) =>
                post.title.includes(searchTerm) // 검색어가 제목에 포함된 글 필터링
            // 영어의 경우 
            // post.title.toLowerCase().includes(searchTerm.toLowerCase()); // 대소문자 동일화 시켜서 검색
            );
            setResult(filteredData);
        } else {
            setResult(data); // 검색어가 없으면 전체 데이터를 표시
        }
    },[searchTerm]);



    return (
        <Wrapper>
            <Container>
                <Button
                    title="글 작성하기"
                    onClick={() => {
                        navigate("/post-write");
                    }}></Button>


                <TextInput
                    height={20}
                    value={query}
                    onChange={(event)=>{
                        setQuery(event.target.value);
                        //setSearchTerm(event.target.value); // 해당 문장 주석 해제 시 검색 버튼을 누르지 않아도 됨
                    }} 
                    placeholder = "검색어 입력"
                    />

                <Button
                    title="검색 하기"
                    onClick={() => {
                        setSearchTerm(query);
                    }} />



                <PostList
                    posts={result}
                    onClickItem={(item) => {
                        navigate(`/post/${item.id}`);
                    }}></PostList>
            </Container>
        </Wrapper>
    )

}

export default MainPage;