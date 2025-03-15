import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import removeName from '../../../shared/utils/removeName';
import { Wrapper, Image, TextWrapper, Typography } from './avatar.styles';

interface IAvatar {
    src: string | undefined,
    name: string | undefined,
    date: string | undefined,
}
//fiz ts issue
const Avatar = ({ src, name, date }: IAvatar) => {
    return (
        <>
            <Wrapper>
                <Image
                    src={src}
                    alt={"author avatar"}
                />
            </Wrapper>
            <TextWrapper>
                <Typography weight={500}>Written by: <Typography weight={700}>{removeName(name)}</Typography></Typography>
                {date && <Typography color='extraDark'>{format(new Date(date), "MMM dd, yyyy", { locale: ptBR })}</Typography>}
            </TextWrapper>
        </>
    );
};

export default Avatar;