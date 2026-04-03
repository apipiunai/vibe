import { Outlet, Link } from "react-router-dom";
import { useWindowSize } from '../contexts/WindowSize';

export default function Layout() {

    const { width } = useWindowSize();

    return (
        <div>
            <main style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
                <Outlet />
            </main>
        </div>
    );
}