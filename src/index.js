import * as components from './components';

/**
 * Install all components
 *
 * @param  {App}  app The Vue application
 * @return {void}
 */
export function install(app) {
    Object.keys(components).forEach((name) => {
        app.component(name, components[name]);
    });
}

// Export each components separately
export * from './components';

// Export the install function as default
export default install;
