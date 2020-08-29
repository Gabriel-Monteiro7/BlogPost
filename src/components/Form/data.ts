import * as Yup from 'yup';

export const schema = Yup.object().shape({
  title: Yup.string().required('Campo obrigatório'),
  body: Yup.string().required('Campo obrigatório'),
});

export const fields = [
  {
    placeholder: 'Digite o titulo',
    // label: 'Nome',
    name: 'title',
    // width: 80,
  },
  {
    placeholder: 'Digite o texto',
    // label: 'Nome',
    name: 'body',
    // width: 80,
    multiline: true,
  },
];
