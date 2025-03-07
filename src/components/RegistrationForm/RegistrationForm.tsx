import React, { type ChangeEventHandler, useRef, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import DOMPurify from 'dompurify';

import styles from './RegistrationForm.module.scss';

import TextField from '#components/TextField/TextField';
import Button from '#components/Button/Button';
import IconButton from '#components/IconButton/IconButton';
import Visibility from '#src/icons/Visibility';
import VisibilityOff from '#src/icons/VisibilityOff';
import PasswordStrength from '#components/PasswordStrength/PasswordStrength';
import CustomRegisterField from '#components/CustomRegisterField/CustomRegisterField';
import FormFeedback from '#components/FormFeedback/FormFeedback';
import LoadingOverlay from '#components/LoadingOverlay/LoadingOverlay';
import Link from '#components/Link/Link';
import { testId } from '#src/utils/common';
import useToggle from '#src/hooks/useToggle';
import { addQueryParam } from '#src/utils/location';
import type { FormErrors } from '#types/form';
import type { RegistrationFormData, Consent } from '#types/account';

type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onConsentChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  errors: FormErrors<RegistrationFormData>;
  values: RegistrationFormData;
  loading: boolean;
  consentValues: Record<string, string | boolean>;
  consentErrors: string[];
  submitting: boolean;
  canSubmit: boolean;
  publisherConsents?: Consent[];
};

const RegistrationForm: React.FC<Props> = ({
  onSubmit,
  onChange,
  onBlur,
  values,
  errors,
  submitting,
  loading,
  canSubmit,
  publisherConsents,
  consentValues,
  onConsentChange,
  consentErrors,
}: Props) => {
  const [viewPassword, toggleViewPassword] = useToggle();

  const { t } = useTranslation('account');
  const location = useLocation();

  const ref = useRef<HTMLDivElement>(null);

  const formatConsentLabel = (label: string): string | JSX.Element => {
    const sanitizedLabel = DOMPurify.sanitize(label);
    const hasHrefOpenTag = /<a(.|\n)*?>/.test(sanitizedLabel);
    const hasHrefCloseTag = /<\/a(.|\n)*?>/.test(sanitizedLabel);

    if (hasHrefOpenTag && hasHrefCloseTag) {
      return <span dangerouslySetInnerHTML={{ __html: label }} />;
    }

    return label;
  };

  useEffect(() => {
    if (errors.form) {
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }, [errors.form]);

  if (loading) {
    return (
      <div style={{ height: 400 }}>
        <LoadingOverlay inline />
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} data-testid={testId('registration-form')} noValidate>
      <h2 className={styles.title}>{t('registration.sign_up')}</h2>
      <div ref={ref}>{errors.form ? <FormFeedback variant="error">{errors.form}</FormFeedback> : null}</div>
      <TextField
        value={values.email}
        onChange={onChange}
        onBlur={onBlur}
        label={t('registration.email')}
        placeholder={t('registration.email')}
        error={!!errors.email || !!errors.form}
        helperText={errors.email}
        name="email"
        type="email"
        required
      />
      <TextField
        value={values.password}
        onChange={onChange}
        onBlur={onBlur}
        label={t('registration.password')}
        placeholder={t('registration.password')}
        error={!!errors.password || !!errors.form}
        helperText={
          <React.Fragment>
            <PasswordStrength password={values.password} />
            {t('registration.password_helper_text')}
          </React.Fragment>
        }
        name="password"
        type={viewPassword ? 'text' : 'password'}
        rightControl={
          <IconButton aria-label={viewPassword ? t('registration.hide_password') : t('registration.view_password')} onClick={() => toggleViewPassword()}>
            {viewPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        }
        required
      />
      {publisherConsents && (
        <div className={styles.customFields} data-testid="custom-reg-fields">
          {publisherConsents.map((consent) => (
            <CustomRegisterField
              key={consent.name}
              type={consent.type}
              name={consent.name}
              options={consent.options}
              label={formatConsentLabel(consent.label)}
              placeholder={consent.placeholder}
              value={consentValues[consent.name]}
              required={consent.required}
              error={consentErrors?.includes(consent.name)}
              helperText={consentErrors?.includes(consent.name) ? t('registration.consent_required') : undefined}
              onChange={onConsentChange}
            />
          ))}
        </div>
      )}
      <Button
        className={styles.continue}
        type="submit"
        label={t('registration.continue')}
        variant="contained"
        color="primary"
        size="large"
        disabled={submitting || !canSubmit}
        fullWidth
      />
      <p className={styles.bottom}>
        {t('registration.already_account')} <Link to={addQueryParam(location, 'u', 'login')}>{t('login.sign_in')}</Link>
      </p>
      {submitting && <LoadingOverlay transparentBackground inline />}
    </form>
  );
};

export default RegistrationForm;
