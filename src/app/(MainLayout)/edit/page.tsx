import { Suspense } from 'react'
import EditImage from './editImage';

const Edit: React.FC = () => {

    return (
        <Suspense>
            <EditImage />
        </Suspense>
    );
};

export default Edit;