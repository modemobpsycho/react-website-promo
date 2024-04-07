import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useState, useEffect, useCallback } from "react";
import useInput from "../hooks/useInput";
import { User } from "../types/user.interface";

export default function EffectSection() {
    const input = useInput();
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = useCallback(async () => {
        setLoading(true);
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        setUsers(users);
        setLoading(false);
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <section>
            <h3>Effects</h3>
            <Button
                style={{ marginBottom: "1rem" }}
                onClick={() => setIsOpen(true)}
            >
                Open information
            </Button>
            <Modal open={isOpen}>
                <h3>Hello from modal</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore veniam voluptatum aliquam nesciunt cumque quia alias
                    ad sapiente accusamus non, harum earum aut explicabo ducimus
                    fuga consequuntur pariatur, dolorem ullam?
                </p>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
            </Modal>
            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                    <input type="text" className="control" {...input} />
                    {users
                        .filter((user) =>
                            user.name
                                .toLowerCase()
                                .includes(input.value.toLowerCase())
                        )
                        .map((user) => (
                            <p key={user.id}>
                                {user.name} - {user.email} - {user.phone}
                            </p>
                        ))}
                </>
            )}
        </section>
    );
}
