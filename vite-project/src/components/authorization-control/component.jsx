import { useContext, useState } from "react";
import { Button } from "../button/component";
import { Modal } from "../modal/component";
import { AuthorizationForm } from "../authorization-form/component";
import { UserContext } from "../../contexts/user";
export const AuthorizationContol = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user, setUser} = useContext(UserContext)
  return (
    <div>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <AuthorizationForm onLogin={() => setIsOpen(false)} />
        </Modal>
      )}
      {user ? (<>
      <span>{user}</span>
      <Button onClick={() => setUser(null)}>logout</Button>
      </>

      ):(
      <Button onClick={() => setIsOpen(true)}>login</Button>)}
    </div>
  );
};
