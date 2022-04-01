import Button from "@atlaskit/button";
import styled, { css } from "styled-components";
import StarFilledIcon from "@atlaskit/icon/glyph/check";
const ButtonStyle = styled(Button)`
  margin-top: 5px;
  text-align: left;

  &,&:hover {
    ${(p) =>
  p.iscompleted &&
  css`
        text-decoration: line-through;
      `}
  }

  &:hover {
    .check-icon {
      display: inline-block;
    }
  }
  .check-icon {
    display: none;

    &:hover {
      border-radius: 3px;
      background: #fff;
    }
  }
`;
function Todo({ todo, checkBtnInput }) {
  return (
    <>
      <ButtonStyle
        iscompleted={todo.iscompleted}
        shouldFitContainer
        iconAfter={
          !todo.iscompleted && (
            <span className="check-icon">
              <StarFilledIcon
                onClick={() => checkBtnInput(todo.id)}
                primaryColor="green"
              ></StarFilledIcon>
            </span>
          )
        }
      >
        {todo.name}
      </ButtonStyle>
    </>
  );
}

export default Todo;
