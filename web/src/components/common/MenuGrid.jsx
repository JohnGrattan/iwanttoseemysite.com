import React from 'react';
import ButtonInternalLink from '../common/ButtonInternalLink';

const MenuGrid = ({
  actions,
  classNames,
  title,
  price,
  description,
  note,
  href,
  icon,
  iconForeground,
  iconBackground,
  buttonLabel,
  buttonLink,
}) => {
  return (
    <div className="overflow-hidden sm:grid sm:grid-cols-3 sm:gap-3">
      {/* <div className="rounded-lg bg-gray-50 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-3 sm:gap-px lg:gap-3"> */}
      {actions.map((action, actionIdx) => (
        <div
          key={actionIdx}
          className={classNames(
            actionIdx === 0 ? 'rounded-lg' : '',
            actionIdx === 1 ? 'rounded-lg' : '',
            actionIdx === actions.length - 2 ? 'rounded-lg' : '',
            actionIdx === actions.length - 1 ? 'rounded-lg' : '',
            'relative my-5 lg:my-0 rounded-lg group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'rounded-lg inline-flex p-3 ring-4 ring-white'
              )}
            >
              <action.icon
                className="h-6 w-6 icon-fill"
                aria-hidden="true"
                style={{ fill: '#4338ca' }}
              />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">{action.title}</h3>
            <p className="mt-2 text-sm text-primary-500">{action.price}</p>
            <p className="mt-2 text-sm text-gray-500">{action.description}</p>
            <p className="mt-2 text-sm text-gray-500 italic">{action.note}</p>
          </div>
          <span className="absolute top-6 right-6">
            <ButtonInternalLink
              btnLink={action.buttonLink}
              bgColor="bg-yellow-500"
              bgHoverColor="bg-yellow-600"
              textColor="text-white"
              textSize="text-md"
              bgWidth="px-4"
              bgHeight="py-2"
            >
              {action.buttonLabel}
            </ButtonInternalLink>
          </span>
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;
