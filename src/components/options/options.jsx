import { useEffect, useState } from 'react'
import InputRange from '../elements/inputs/inputRange/inputRange'
import Switch from '../elements/inputs/switch/switch'
import ColorPicker from '../elements/inputs/colorPicker'
import Download from '../elements/download'
import InputFile from '../elements/inputs/inputFile/inputFile'
import './options.css'
import Details from '../elements/details/details'


const Options = ({ setData, data }) => {
    const initialValues = {
        zoom: 1,
        shadow: {
        isShadow: false,
        inset: false,
        color: 'rgba(0,0,0)',
        x: 0,
        y: 0,
        blur: 0,
        opacity: 1,
        },
        move: {
        translateY: 0,
        translateX: 0,
        },
        rotate: 0,
    }
    const restablecer = () => {
      setValues(initialValues)
    }
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        setData(...data, values)
    }, [values])

    return (
        <section id='options'>
            <hr />
            <Details summary='Tamaño'>
                <InputRange setValue={setValues} values={values} currentValue={values.zoom} min={0} max={2} step={0.25} input={'zoom'} />
            </Details>

            <Details summary='Sombra'>
                <Switch setValue={setValues} currentValue={values.shadow.isShadow} input={'isShadow'} />
                {values.shadow.isShadow ?
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <span>Color</span>
                        <ColorPicker setValue={setValues} input={'colorShadow'} currenValue={colorShadow} />
                        <span>Ancho</span>
                        <InputRange setValue={setValues} values={values} currentValue={values.shadow.x} min={-100} max={100} step={1} input={'shadowX'} />
                        <span>Altura</span>
                        <InputRange setValue={setValues} values={values} currentValue={values.shadow.y} min={-100} max={100} step={1} input={'shadowY'} />
                        <span>Blur</span>
                        <InputRange setValue={setValues} values={values} currentValue={values.shadow.blur} min={2} max={100} step={1} input={'shadowBlur'} />
                        <span>Opacidad</span>
                        <InputRange setValue={setValues} values={values} currentValue={values.shadow.opacity} min={0} max={1} step={0.1} input={'opacity'} />
                    </div>
                    :
                    null
                }
            </Details>

            <Details summary='Mover'>
                <span>Horizontal</span>
                <InputRange setValue={setValues} values={values} currentValue={values.move.translateX} min={-100} max={100} step={1} input={'translateX'} />
                <span>Vertical</span>
                <InputRange setValue={setValues} values={values} currentValue={values.move.translateY} min={-100} max={100} step={1} input={'translateY'} />
            </Details>

            <Details summary='Rotar'>
                <InputRange setValue={setValues} values={values} currentValue={values.rotate} min={0} max={360} step={1} input={'rotate'} />
            </Details>

            <button onClick={() => { restablecer() }}>
                restablecer
            </button>


        </section>
    );
};

export default Options;
