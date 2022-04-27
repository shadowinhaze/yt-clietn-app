export enum LoginForm {
  login = 'login',
  pass = 'pass',
}

export enum NewItemForm {
  title = 'title',
  descr = 'description',
  img = 'image',
  video = 'video',
  date = 'date',
}

export enum FormsErrorsKeys {
  req = 'required',
  minLen = 'minlength',
  maxLen = 'maxlength',
  pattern = 'pattern',
  mail = 'email',
}

export const NewItemFormFields: NewItemFormCollection = [
  {
    name: 'title',
    title: 'clip title',
    placeholder: 'some title is here...',
    required: true,
  },
  {
    name: 'description',
    title: 'description',
    placeholder: "it's interesting video about...",
    required: false,
  },
  {
    name: 'image',
    title: 'layout link',
    placeholder: 'some layout for your clip...',
    required: true,
  },
  {
    name: 'video',
    title: 'video link',
    placeholder: 'link for your interesting video...',
    required: true,
  },
];

export const FORMS_PATTERNS = {
  video: /^(https?:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/,
  img: /(http(s?):)([/|.|\w|\s|-])*/,
  digit: /(?=.*\d)/,
  lowerCase: /(?=.*[a-z])/,
  upperCase: /(?=.*[A-Z])/,
  symbol: /(?=.*[-+_!@#$%^&*.,?])/,
};

export const ERROR_MESSAGES: ErrorsBase = {
  login: {
    req: 'Please enter a login email',
    unknown: 'There is a problem with your login email',
  },
  pass: {
    req: 'You must enter the password',
    length: 'Your password must contain at least 8 symbols',
    pattern: 'Some problem with pattern',
    weak: {
      base: "Your password isn't strong enough",
      digit: 'add digit',
      upperCase: 'add uppercase letter',
      lowerCase: 'add lowercase letter',
      symbol: 'add special symbol: -+_!@#$%^&*.,?',
    },
    unknown: 'There is a problem with your password',
  },
  title: {
    req: 'You must enter the title',
    minlength: 'The title is too short',
    maxlength: 'The title is too long',
  },
  description: {
    maxlength: 'The description is too long',
  },
  image: {
    req: 'Please enter a link to the image',
    pattern: 'The image link is invalid',
  },
  video: {
    req: 'Please enter a link to the video',
    pattern: 'The video link is invalid',
  },
};

export enum LoginFormLimits {
  passMinLen = 8,
}

export enum NewItemFormLimits {
  titleMinLen = 3,
  titleMaxLen = 20,
  descrMaxLen = 255,
}
