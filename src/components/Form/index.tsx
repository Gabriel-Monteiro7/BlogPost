import React, {useRef} from 'react';

import {
  Container,
  ContainerInput,
  ContainerButton,
  ButtonDefault,
  TextButton,
  Error,
  ContainerInputs,
} from './styles';
import Input from '~/components/Input';
import {schema, fields} from './data';
import {useDispatch, useSelector} from 'react-redux';
import {insertRequest} from '~/store/modules/post/actions';
const Form: React.FC<any> = ({children, setEndModal}: any) => {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  let id = useSelector((state: any) => state.post.posts.length);

  return (
    <Container
      enableReinitialize={false}
      innerRef={formRef}
      validationSchema={schema}
      initialValues={{}}
      onSubmit={(values: any) => {
        id += 1;
        values = {...values, id};
        dispatch(insertRequest(values));
        setEndModal(true);
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        // values,
        errors,
        touched,
      }: any) => (
        <>
          <ContainerInputs>
            {fields.map((input, index) => {
              return (
                <ContainerInput key={index}>
                  <Input
                    onChangeText={handleChange(input.name)}
                    onBlur={handleBlur(input.name)}
                    error={
                      errors[input.name] && touched[input.name] ? true : false
                    }
                    {...input}
                  />
                  <Error hidden={errors[input.name] || touched[input.name]}>
                    {errors[input.name]}
                  </Error>
                </ContainerInput>
              );
            })}
          </ContainerInputs>
          <ContainerButton>
            {children}
            <ButtonDefault onPress={handleSubmit}>
              <TextButton>Adicionar</TextButton>
            </ButtonDefault>
          </ContainerButton>
        </>
      )}
    </Container>
  );
};

export default Form;
