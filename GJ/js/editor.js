// Content Editor JavaScript

let editMode = false;
let currentEditElement = null;
let currentEditKey = null;

document.addEventListener('DOMContentLoaded', function() {
    const editModeToggle = document.getElementById('editModeToggle');
    const editModal = document.getElementById('editModal');
    const editForm = document.getElementById('editForm');
    const editModalClose = document.querySelector('.edit-modal-close');

    // Toggle edit mode
    if (editModeToggle) {
        editModeToggle.addEventListener('click', function() {
            editMode = !editMode;
            document.body.classList.toggle('edit-mode', editMode);
            
            if (editMode) {
                editModeToggle.innerHTML = '<i class="fas fa-times"></i>';
                editModeToggle.title = 'Exit Edit Mode';
            } else {
                editModeToggle.innerHTML = '<i class="fas fa-edit"></i>';
                editModeToggle.title = 'Toggle Edit Mode';
            }
        });
    }

    // Handle clicks on editable content
    document.addEventListener('click', function(e) {
        if (!editMode) return;

        const editableElement = e.target.closest('[data-content]');
        if (editableElement && !e.target.closest('.edit-modal')) {
            e.preventDefault();
            e.stopPropagation();
            openEditModal(editableElement);
        }
    });

    // Close modal
    if (editModalClose) {
        editModalClose.addEventListener('click', function() {
            editModal.classList.remove('active');
        });
    }

    // Close modal on outside click
    if (editModal) {
        editModal.addEventListener('click', function(e) {
            if (e.target === editModal) {
                editModal.classList.remove('active');
            }
        });
    }

    // Handle form submission
    if (editForm) {
        editForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveEdit();
        });
    }
});

function openEditModal(element) {
    const editModal = document.getElementById('editModal');
    const editField = document.getElementById('editField');
    const editValue = document.getElementById('editValue');
    const editValueLabel = document.getElementById('editValueLabel');
    const editModalTitle = document.getElementById('editModalTitle');

    if (!editModal || !editField || !editValue) return;

    currentEditElement = element;
    currentEditKey = element.getAttribute('data-content');

    // Get current value
    let currentValue = '';
    if (element.tagName === 'IMG') {
        currentValue = element.src || element.getAttribute('src') || '';
    } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        currentValue = element.value;
    } else {
        currentValue = element.textContent;
    }

    editField.value = currentEditKey;
    editValue.value = currentValue;

    // Image update: show "Image URL" label and modal title
    if (element.tagName === 'IMG') {
        editValue.rows = 3;
        editValue.placeholder = 'Paste full image URL (e.g. https://...)';
        if (editValueLabel) editValueLabel.textContent = 'Image URL:';
        if (editModalTitle) editModalTitle.textContent = 'Update Image';
    } else {
        editValue.rows = 5;
        editValue.placeholder = 'Enter content';
        if (editValueLabel) editValueLabel.textContent = 'Content:';
        if (editModalTitle) editModalTitle.textContent = 'Edit Content';
    }

    editModal.classList.add('active');
    editValue.focus();
}

function saveEdit() {
    const editValue = document.getElementById('editValue');
    if (!editValue || !currentEditElement) return;

    const newValue = editValue.value.trim();

    // Update the element
    if (currentEditElement.tagName === 'IMG') {
        currentEditElement.src = newValue;
    } else if (currentEditElement.tagName === 'INPUT' || currentEditElement.tagName === 'TEXTAREA') {
        currentEditElement.value = newValue;
    } else {
        currentEditElement.textContent = newValue;
    }

    // Save to localStorage
    if (typeof saveContent === 'function') {
        saveContent(currentEditKey, newValue);
    }

    // Close modal
    const editModal = document.getElementById('editModal');
    if (editModal) {
        editModal.classList.remove('active');
    }

    // Show success message
    showNotification('Content saved successfully!');
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10001;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 300);
    }, 3000);
}

// Export content function (for backup/download)
function exportContent() {
    const savedContent = localStorage.getItem('gangajewellers_content');
    if (savedContent) {
        const blob = new Blob([savedContent], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'gangajewellers-content.json';
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Import content function
function importContent(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const content = JSON.parse(e.target.result);
            localStorage.setItem('gangajewellers_content', JSON.stringify(content));
            location.reload();
        } catch (error) {
            alert('Error importing content. Please check the file format.');
        }
    };
    reader.readAsText(file);
}
