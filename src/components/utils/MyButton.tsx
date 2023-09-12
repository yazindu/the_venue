import TicketIcon from '../../resources/images/icons/ticket.png'
import Button from '@mui/material/Button';

type MyButtonProps = {
    text: string
    link: string
    size: "small" | "medium" | "large"
    style: { background: string, color: 'string' }
}

export const MyButton = ({text, link, size, style}: MyButtonProps) => {
    return (
        <Button
            variant="contained"
            href={link}
            size={size ? size : 'small'}
            style={{
                background: '#8e8e8e',
                color: '#ffffff',
                ...style
            }}
        >
            {text}
        </Button>
    )
}