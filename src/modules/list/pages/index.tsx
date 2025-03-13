import { useState } from "react";
import { Container, ContainerText, H2, Hr, FlexWrapper } from "./list.styles";
import Dropdown from "../components/dropdown/dropdown";
import { Sort, Search } from "../../shared/components";
import useGetList from "../../shared/services/useGetList";


const List = () => {
        const [isExpanded, setIsExpanded] = useState<boolean>(false);
        const { data, isLoading, isError } = useGetList();
        console.log(data, 'hmmmmmm');
        
        const items = [
            { label: 'Item 1', onClick: () => console.log('Item 1 clicked') },
            { label: 'Item 2', onClick: () => console.log('Item 2 clicked') },
            { label: 'Item 3', onClick: () => console.log('Item 3 clicked') },
          ];
	return (
        <>
            <Container isExpanded={isExpanded}>
                <ContainerText isExpanded={isExpanded}>
                    <h1>dentsu</h1>
                    <H2>world services</H2>
                </ContainerText>
                <Search isExpanded={isExpanded} setIsExpanded={setIsExpanded} onSearch={() => {}} />
            </Container>
            <Hr/>
            <FlexWrapper>
                <Dropdown items={items}>Category</Dropdown>
                <Dropdown items={items}>Autor</Dropdown>
                <Sort>Newest first</Sort>
            </FlexWrapper>
        </>
	);
};

export default List;
