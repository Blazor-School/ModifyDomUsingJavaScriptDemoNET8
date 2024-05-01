function UpdateBlazorInitiatedAttribute()
{
    let targetElement = document.getElementById("dom1");
    targetElement.setAttribute("attribute1", "js-updated-value");
}

function InitiateAttributeValue()
{
    let targetElement = document.getElementById("dom2");
    targetElement.setAttribute("attribute1", "js-initiated-value");
}

function ToggleChildDOM()
{
    let targetElement = document.getElementById("dom3");
    let childElement = document.getElementById("child-dom");

    if (childElement !== null)
    {
        childElement.remove();
    }
    else
    {
        childElement = document.createElement("p");
        childElement.setAttribute("id", "child-dom")
        childElement.innerHTML = "Hello Blazor School! (Child DOM)"
        targetElement.appendChild(childElement);
    }
}

function UpdateContentEmptyDOM()
{
    let targetElement = document.getElementById("dom4");
    targetElement.innerHTML = "Updated by JavaScript";
}