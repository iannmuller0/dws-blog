import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
	width: 100%;

    form {
        width: 100%;
    }

    input {
		width: 90%;
	    color: ${({ theme }) => theme.colors.neutral.extraDark};
        border: 1px solid ${({ theme }) => theme.colors.neutral.extraLight};
        padding: 8px 8px 8px 16px;
        border-radius: 25px;
     
        &:hover {
           border: 1px solid ${({ theme }) => theme.colors.accent1.medium};
            border-radius: 25px;
        }

        &:active {
            outline: ${({ theme }) => theme.colors.accent1.medium};
        }

        &:focus {
            outline: ${({ theme }) => theme.colors.accent1.medium};
        }
	}
        
    @media (min-width: 1024px) {
	    width: 30%;
        position: relative;

        input {
            width: -webkit-fill-available;
            padding: 15px 12px 15px 16px;
        }
    }

`;

export const InputWrapper = styled.div`
	width: 100%;

	input {
		width: 90%;
	    color: ${({ theme }) => theme.colors.neutral.extraDark};
        border: 1px solid ${({ theme }) => theme.colors.neutral.extraLight};
        padding: 8px 8px 8px 16px;
        border-radius: 25px;
     
        &:hover {
           border: 1px solid ${({ theme }) => theme.colors.accent1.medium};
            border-radius: 25px;
        }

        &:focus {
            outline: ${({ theme }) => theme.colors.accent1.medium};
        }
	}
`;

export const IconContainer = styled.div`
    background: ${({ theme }) => theme.colors.primary.light};
    padding: 9px 9px 8px 9px;
    border-radius: 25px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: auto;

    svg {
        stroke: white;
    }
    
    @media (min-width: 1024px) {
        margin-left: 0;
        position: absolute;
        right: 6px;
        bottom: 6px;
        top: 6px;
    }

`;

export const ExpandedInput = styled.input`
	width: 100%;
	padding: 8px;
	font-size: 16px;
	border: 1px solid #ccc;
	border-radius: 4px;
	outline: none;
`;
