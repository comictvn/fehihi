import React, { useMemo } from 'react'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next' // Added import for useTranslation
import styles from './index.module.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  linkTo?: string
  buttonType?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | 'review' // Added 'review' type
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
  const { buttonType = 'primary', title, className, children, linkTo, ...rest } = props
  const { t } = useTranslation() // Added useTranslation hook

  const component = useMemo(() => {
    let component = children
    if (typeof children === 'string' || title) {
      component = <span>{children || title}</span>
    }

    // Modified condition to exclude 'review' buttonType
    if (linkTo && buttonType !== 'review') {
      return (
        <a href={linkTo} className={styles.link_tag}>
          {component}
        </a>
      )
    }
    return component
  }, [linkTo, children, title, buttonType]) // Added buttonType as a dependency

  // Added condition to render a 'review' buttonType
  if (buttonType === 'review') {
    return <div className={clsx(className, styles.reviewButton)} {...rest}>{t('button.reviewResults')}</div>
  }

  return (
    <button ref={ref} className={clsx(className, styles.button, styles[buttonType])} {...rest}>
      {component}
    </button>
  )
})

export default Button