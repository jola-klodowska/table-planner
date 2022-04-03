import { ButtonGroup, Button } from "react-bootstrap";

const updateButton = props => {

    return (
        <ButtonGroup className="mb-2">
            <Button onClick={props.onClick}>
                {props.children}
            </Button>
        </ButtonGroup>
    );
}

export default updateButton;