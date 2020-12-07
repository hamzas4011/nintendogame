import { ConsoleProvider } from '../../contexts/ConsoleContext';
import ConsoleUpdate from '../../components/console/ConsoleUpdate';
import ConsoleList from '../../components/console/ConsoleList';

const UpdateConsole = () => {
    return (
        <section>
            <ConsoleProvider>
                <ConsoleUpdate></ConsoleUpdate>
                <ConsoleList></ConsoleList>
            </ConsoleProvider>
        </section>
    )
}
export default UpdateConsole;