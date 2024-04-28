import { component$, useSignal, useStyles$ } from '@builder.io/qwik';
import { Modal, Select } from '@qwik-ui/headless';
import styles from '../snippets/modal.css?inline';

export default component$(() => {
  useStyles$(styles);
  const isOpen = useSignal(false);

  return (
    <>
      <button class="modal-trigger" onClick$={() => (isOpen.value = true)}>
        Open Modal
      </button>
      <Modal class="modal" bind:show={isOpen}>
        Modal Content
        <Select.Root class="select">
          <Select.Label>Logged in users</Select.Label>
          <Select.Trigger class="select-trigger">
            <Select.Value placeholder="Select an option" />
          </Select.Trigger>
          <Select.Popover class="select-popover">
            <Select.Listbox class="select-listbox">
              <Select.Item>
                <Select.ItemLabel>Option 1</Select.ItemLabel>
              </Select.Item>
              <Select.Item>
                <Select.ItemLabel>Option 2</Select.ItemLabel>
              </Select.Item>
            </Select.Listbox>
          </Select.Popover>
        </Select.Root>
      </Modal>
    </>
  );
});